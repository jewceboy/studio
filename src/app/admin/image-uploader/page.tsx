
'use client';

import { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Copy, Check, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import PageHeader from '@/components/shared/PageHeader';

interface UploadProgress {
  fileName: string;
  progress: number;
  downloadURL?: string;
  error?: string;
}

export default function ImageUploaderPage() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [uploadProgress, setUploadProgress] = useState<UploadProgress[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleUpload = async () => {
    if (!files || files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select one or more images to upload.",
        variant: "destructive",
      });
      return;
    }

    if (!storage) {
       toast({
        title: "Firebase Storage not configured",
        description: "Please ensure your Firebase credentials are set up correctly in your environment.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setUploadProgress(Array.from(files).map(file => ({ fileName: file.name, progress: 0 })));

    const uploadPromises = Array.from(files).map((file, index) => {
      const storageRef = ref(storage, 'blog-images/' + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file, { contentType: file.type });

      return new Promise<void>((resolve) => {
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(prev => {
              const newProgress = [...prev];
              newProgress[index] = { ...newProgress[index], progress: progress };
              return newProgress;
            });
          },
          (error) => {
            console.error(`Upload failed for ${file.name}:`, error);
            setUploadProgress(prev => {
              const newProgress = [...prev];
              newProgress[index] = { ...newProgress[index], error: error.message };
              return newProgress;
            });
            resolve(); // Resolve even on error to not block Promise.all
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              setUploadProgress(prev => {
                const newProgress = [...prev];
                newProgress[index] = { ...newProgress[index], downloadURL: downloadURL, progress: 100 };
                return newProgress;
              });
              resolve();
            } catch (error) {
               console.error(`Failed to get download URL for ${file.name}:`, error);
               setUploadProgress(prev => {
                const newProgress = [...prev];
                newProgress[index] = { ...newProgress[index], error: (error as Error).message };
                return newProgress;
              });
              resolve();
            }
          }
        );
      });
    });

    await Promise.all(uploadPromises);
    setIsLoading(false);
    toast({
      title: "Uploads complete",
      description: "You can now copy the URLs for your images.",
    });
  };

  const CopyButton = ({ url }: { url: string }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    return (
      <Button variant="outline" size="sm" onClick={handleCopy}>
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        <span className="ml-2">{copied ? 'Copied!' : 'Copy'}</span>
      </Button>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Blog Image Uploader"
        subtitle="Bulk upload images to Firebase Storage and get their URLs."
      />
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Upload Images</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid w-full items-center gap-2">
            <Input id="image-upload" type="file" multiple onChange={handleFileChange} />
            <p className="text-xs text-muted-foreground">You can select multiple image files.</p>
          </div>
          <Button onClick={handleUpload} disabled={isLoading} className="w-full">
            <Upload className="mr-2 h-4 w-4" />
            {isLoading ? 'Uploading...' : `Upload ${files?.length || 0} File(s)`}
          </Button>
          
          {uploadProgress.length > 0 && (
            <div className="space-y-4 pt-4 border-t">
              <h4 className="font-semibold text-lg">Upload Results</h4>
              {uploadProgress.map((item, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <p className="text-sm font-medium truncate">{item.fileName}</p>
                  <div className="w-full bg-secondary rounded-full h-2.5 my-2">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${item.progress}%` }}></div>
                  </div>
                   {item.downloadURL && (
                    <div className="flex items-center justify-between gap-2 mt-2">
                      <Input readOnly value={item.downloadURL} className="text-xs bg-secondary" />
                      <CopyButton url={item.downloadURL} />
                    </div>
                  )}
                   {item.error && (
                    <div className="flex items-center gap-2 mt-2 text-destructive">
                      <AlertCircle className="h-4 w-4" />
                      <p className="text-xs">Upload failed: {item.error}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

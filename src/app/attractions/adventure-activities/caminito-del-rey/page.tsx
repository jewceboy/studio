
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Ticket, Mountain, Info, MapPin, CheckCircle, Water, Backpack, Footprints, XCircle, Ban, Toilet } from 'lucide-react';
import imageData from '@/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';

type ImageData = {
  [key: string]: {
    url: string;
    hint: string;
    width: number;
    height: number;
  };
};
const images: ImageData = imageData;


export const metadata = {
  title: 'Caminito del Rey Walk – 2025 Update on What you need to Know',
  description: 'Your complete 2025 guide to the Caminito del Rey walk. Get up-to-date tips on booking tickets, trail difficulty, how to get there, and what to expect on this spectacular hike near Malaga.',
};

export default function CaminitoDelReyPage() {
  return (
    <div>
      <PageHeader
        title="Caminito del Rey Walk – 2025 Update on What you need to Know"
        subtitle="Once the world's most dangerous footpath, now a spectacular and epic adventure."
      />

      <Section className="pt-0">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose lg:prose-xl max-w-none prose-headings:font-display prose-a:text-primary prose-strong:text-text-primary"
          >
            <p>
              The Caminito del Rey, which translates to ‘The King’s little Path’ was constructed in 1905 and was aptly named after King Alfonso XIII crossed the walk in 1921.
            </p>
            <p>
              The walkway fell into dis-repair and despite being closed to the public, people still found a way to cross it, resulting in many tragic deaths. Until it’s restoration in 2015, the Caminito was often referred to as ‘The World’s most Dangerous Footpath’ and ‘One of The World’s Scariest Hikes’.
            </p>
            <p>
              The Caminito re-opened in 2015 following a 4 year restoration project and is now much more of a scenic walk than the terrifying trek of years gone by. Since it re-opened around 300.000 tickets are sold annually for this famous walk, it even attracts celebrities.
            </p>

            <figure className="my-6">
                <Image src="https://picsum.photos/seed/caminito-gino/800/450" alt="Celebrities on the Caminito del Rey bridge" width={800} height={450} className="rounded-lg shadow-md w-full h-auto" data-ai-hint="celebrity hike bridge"/>
                <figcaption className="text-xs text-center text-muted-foreground mt-2">The famous bridge is a highlight for many visitors, including celebrities.</figcaption>
            </figure>

            <p>
                Recently UK celebrity chefs Gordon Ramsey, Gino D’acampo and Fred Sirieix filmed part of the popular ITV show ‘Gordon, Gino and Fred: Viva Espana! taking on the walk. The trio were filmed crossing the notorious suspension footbridge, the ‘Puente del Rey’ with a terrified Gino hilariously crawling along while Gordon and Fred look on in hysterics.
            </p>
            <p>
                The walk is around 60km inland from the beautiful city of Malaga. It’s over 7km long and is made up of forest paths and footbridges, most of which cling precariously to the gorge walls 100 metres above the River Guadalhorce.
            </p>
            <p>
                Still not convinced it’s safe enough?? If my ‘terrified of heights’ husband can do this trek, believe me, anyone can. 🙂
            </p>

            <h2>Getting to the Caminito del Rey</h2>
            <p>
                Getting to the Caminito del Rey is easy, there are a number of different options to consider.
            </p>
            <ul>
                <li><strong>Car:</strong> A pleasant drive through the Malaga countryside to El Chorro, depending on your start point, it should take less than 1.5 hours.</li>
                <li><strong>Train:</strong> From Malaga’s Maria Zambrano train station, direct to El Chorro. The journey takes around 50 minutes direct and trains run several times a day for between €3 and €5.</li>
                <li><strong>Bus + ticket:</strong> By far the most stress free way to get to the Camino is to book a guided bus transfer with your entrance ticket to the walk included, this way someone else can take the hassle out of the planning. All you have to do is turn up at the meeting point at the agreed pick-up time.</li>
            </ul>
             <div className="my-6">
                <Button asChild className="w-full md:w-auto">
                    <Link href="#" target="_blank" rel="noopener noreferrer">
                        Book a Guided Tour with Transport
                    </Link>
                </Button>
             </div>

            <figure className="my-6">
                <Image src="https://picsum.photos/seed/caminito-railway/800/400" alt="Railway line running through the gorge at El Chorro" width={800} height={400} className="rounded-lg shadow-md w-full h-auto" data-ai-hint="railway gorge train"/>
                <figcaption className="text-xs text-center text-muted-foreground mt-2">The historic railway line carved through the gorge.</figcaption>
            </figure>
            
            <p>
                Tourists and locals have been coming to the area around the Caminito for years, especially in summer time when the turquoise reservoirs offer much needed respite from the hot sun. There are some great water sports including a giant inflatable water park on the lake from June to September.
            </p>
             <p>
                There are plenty quaint little campsites, b&b’s and guest houses in the area known as the Guadalhorce valley. The landscape is unique, breathtaking in fact and its all just so peaceful and calm.
            </p>

            <h2>How to book your tickets</h2>
             <figure className="my-6">
                <Image src="https://picsum.photos/seed/caminito-journey-start/800/400" alt="The start of the wooden walkway on the Caminito del Rey" width={800} height={400} className="rounded-lg shadow-md w-full h-auto" data-ai-hint="walkway start gorge"/>
                <figcaption className="text-xs text-center text-muted-foreground mt-2">The journey begins on the famous boardwalks.</figcaption>
            </figure>
            <p>
                Spaces are limited for the Caminito del Rey for safety reasons and they only allow around 50 people every half hour. Slots are released in 3 or 4 month batches and weekends get booked up quickly so there’s no point in just turning up hoping to get a slot. You really must book ahead.
            </p>
            <p>
                Booking is easy, just go to the calendar choose your date and time and select the number of tickets you want. Pay with a credit card and print off the confirmation e-mail to take with you.
            </p>
             <div className="my-6 p-4 info-box-custom-bg border-l-4 border-destructive">
                <h4 className="font-display font-semibold text-destructive">Important Note!</h4>
                <p className="text-muted-foreground">If you can’t make it for any reason, they don’t offer refunds or alternative dates. It’s tough luck basically as we found out after we were a ‘no show’ the first time.</p>
            </div>
             <p>
                We finally did the walk on chilly but beautifully sunny Saturday afternoon in December, after our previous booking a year earlier was aborted when my daughter woke up covered in chicken pox spots that morning. Weather in Ardales, as it’s in land can be a few degrees cooler in winter than down on the coast and in summer expect it to be hotter, so be sure to check the forecast. On the day of our walk temperatures in Malaga were 16 degrees but only 12 degrees in Ardales that day. I was glad I threw an extra layer into the boot of the car just before we set off because with the blustery wind it felt much colder.
            </p>

            <h2>Arriving at the Caminito del Rey</h2>
             <p>
                The Camino del Rey walk is linear, you can only start the walk at one end, this is the North access point, you have to finish the walk at the South exit point. For me the most logical thing to do if you arrive by car is this…follow road signs to the North entrance, park your car and start the walk through the entrance tunnel.
            </p>
            <p>
                When you finish the walk at the South end, directly opposite the Garganta Hotel is a bus stop. Buses run several times per hour and are non-stop between the North and South points, taking around 15 minutes each way. You can pay the driver in cash, the cost is €2.50 pp (correct price for 2023) and the bus will take you right back to the North access right where you started. The bus driver will only accept cash, no cards and it’s worth bearing in mind that it runs between the hours of 7.40am and 7pm, it stops at El Kiosko restaurant at the North entrance.
            </p>
            <p>
                If you have time, I can personally recommend a well deserved pit-stop in the outdoor terrace bar of La Garganta Hotel, where you can rest your tired legs and marvel over the amazing walk you just completed.
            </p>

             <figure className="my-6">
                <Image src="https://picsum.photos/seed/caminito-north-entrance/800/400" alt="North entrance and start of the walk" width={800} height={400} className="rounded-lg shadow-md w-full h-auto" data-ai-hint="restaurant entrance hike"/>
                <figcaption className="text-xs text-center text-muted-foreground mt-2">North entrance (El Kiosko restaurant) and start of the walk.</figcaption>
            </figure>

            <p>
                We wanted to grab a light bite before starting the walk which was scheduled for 2pm, and knew there were some restaurants at the North entrance. Restaurant El Kiosko overlooking the lake was the perfect choice as next to it is the tunnel which you need to go through to start the Caminito del Rey. Here you can pick up take away drinks and snacks too but bear in mind after this point, there is nowhere else to buy refreshments.
            </p>

             <figure className="my-6">
                <Image src="https://picsum.photos/seed/caminito-el-kiosko/800/400" alt="Restaurant El Kiosko" width={800} height={400} className="rounded-lg shadow-md w-full h-auto" data-ai-hint="restaurant snacks entrance"/>
                <figcaption className="text-xs text-center text-muted-foreground mt-2">Restaurant El Kiosko & place to pick up snacks at the North entrance.</figcaption>
            </figure>

            <p>
                We arrived about 12.30pm and ventured upstairs at El Kiosko where they had a huge open fire so we grabbed a table right next to it and ordered. Portions were huge and we found it a bit much before embarking on a 7k hike. There is a snack bar downstairs and also a grab and go type counter where you can pick up supplies like water, canned drinks, snack bars etc to take with you. There are also toilets downstairs at the entrance to the tunnel.
            </p>

            <figure className="my-6">
                <Image src="https://picsum.photos/seed/el-kiosko-fire/800/400" alt="Roaring fire in restaurant El Kiosko" width={800} height={400} className="rounded-lg shadow-md w-full h-auto" data-ai-hint="restaurant fireplace cozy"/>
                <figcaption className="text-xs text-center text-muted-foreground mt-2">A roaring fire in restaurant El Kiosko on a chilly day.</figcaption>
            </figure>


            <h2>Allow yourself plenty of time</h2>
            <p>
                From this point (the tunnel), you still need to allow yourself 30 minutes before your time slot as this is NOT the start of the Caminito del Rey. This a 2.5 km scenic walk through forest to reach the starting point which will take 30 minutes at least.
            </p>
            <p>
                Once at the starting point there were already loads of people waiting and there are staff to check your tickets, give you helmets and put you in the correct group. There are a lot of people that are part of guided tours which you can also book through the website, the tours are in English and Spanish. Next they separated people into English and Spanish speakers for a brief safety instruction where the guide told us to allow around 2.5 hours to complete the walk, then you are off on your way.
            </p>

             <figure className="my-6">
                <Image src="https://picsum.photos/seed/lake-el-chorro/800/400" alt="View of one of the lakes near the Caminito" width={800} height={400} className="rounded-lg shadow-md w-full h-auto" data-ai-hint="lake view mountains"/>
                <figcaption className="text-xs text-center text-muted-foreground mt-2">One of the beautiful lakes near El Chorro.</figcaption>
            </figure>

            <p>
                Almost immediately we came to a stretch of the route where the footpath changes to wooden slats secured on top of steel rods which are pinned into the side of the mountain. There’s a mesh fence and handrail about waist high and most of this is suspended around 100 feet up. It was only at this point I realised my husband of 12 years or so was actually really terrified of heights, this was real proper fear written all over his face. Obviously, I laughed and told him it was 100% safe and to get on with it as we had another 5km to go, we had already come too far to turn back.
            </p>
            <p>
                The scenery along the route is amazing, my husband missed out on most of it because he could barely look up or down. The vultures, buzzards and eagles circling above are ever present and I wondered if they were there waiting patiently for victims to fall. As mentioned, the footpath fell into disrepair years ago and was closed in 2000 as it was so dangerous. You can actually see the original path complete with holes, rusty metal poles and huge sections missing right below as you walk the new pathway. Terrifying to think adrenaline junkies attempted this walk while it was in disrepair despite the €6000 fine not to mention the huge risk involved. Memorials are displayed to acknowledge 4 of the climbers that lost their life….
            </p>

            <figure className="my-6">
                <Image src="https://picsum.photos/seed/caminito-old-path/800/400" alt="View of the old dangerous path below the new one" width={800} height={400} className="rounded-lg shadow-md w-full h-auto" data-ai-hint="old dangerous path"/>
                <figcaption className="text-xs text-center text-muted-foreground mt-2">The remains of the old path serve as a chilling reminder of the walk's history.</figcaption>
            </figure>

            <p>
                No fear now though, It is completely safe once again and very well organised from start to finish.
            </p>

            <h2>The Walkway of Death</h2>
            <p>
                About 2km from the end as the path snakes around a bend it reaches a crucial point where walkers cross from one side of the gorge to the other. The only way to do this is by walking over a suspended bridge about 10 metres in length and hundreds of metres high, it is known as ‘The Walkway of Death’.
            </p>
            
            <div className="aspect-w-16 aspect-h-9 my-8">
              <iframe 
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/Pj13T3g4G2k" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>

            <p>
                There are guides either side of the bridge making sure that everyone crosses safely, they will also give the option to turn back for those too scared. From this point, you only have around 2km to go so turning back is not an option for most. I loved this part, it was such a great opportunity to take photos and video from all angles. Suspended mid air between the rock face with absolutely nothing interrupting your view.
            </p>

            <figure className="my-6">
                <Image src="https://picsum.photos/seed/walkway-of-nerves/800/500" alt="The suspension bridge on the Caminito del Rey" width={800} height={500} className="rounded-lg shadow-md w-full h-auto" data-ai-hint="suspension bridge gorge"/>
                <figcaption className="text-xs text-center text-muted-foreground mt-2">The suspension bridge is a test for those with a fear of heights.</figcaption>
            </figure>

            <p>
                Once safely on the other side and during the final km stretch, the Caminito takes a dramatic path along a very straight and narrow cliff, then finally comes back to solid ground for the final few hundred metres. There are some information boards explaining how and when it was built and about the restoration, stop and look at them as they really help you appreciate the almost impossible task of it’s construction.
            </p>

            <figure className="my-6">
                <Image src="https://picsum.photos/seed/caminito-map/800/500" alt="Map of the El Chorro region and the Caminito del Rey route" width={800} height={500} className="rounded-lg shadow-md w-full h-auto" data-ai-hint="map trail route"/>
                <figcaption className="text-xs text-center text-muted-foreground mt-2">A map showing the linear route of the walk.</figcaption>
            </figure>
            
            <h2>Getting back to your car</h2>
             <p>
                All that is left to do now is keep walking another few hundred metres until you arrive at El Chorro train station. Pass the car park and a camp site, then you’ll see the train station on the left with a handy little bar to grab a quick drink. Next to the station is where you pick up the bus to take you right back to the start/North. There were already people waiting when we arrived and a bus had just pulled in however there was no room for us so we had to wait 30 minutes for the next one.
            </p>
            <figure className="my-6">
                <Image src="https://picsum.photos/seed/el-chorro-station/800/400" alt="El Chorro Train station" width={800} height={400} className="rounded-lg shadow-md w-full h-auto" data-ai-hint="train station rural"/>
                <figcaption className="text-xs text-center text-muted-foreground mt-2">El Chorro Train station at the end of the walk.</figcaption>
            </figure>
             <p>
                If you have a little bit of time a fantastic place to grab a bite to eat and a drink is La Garganta Hotel and restaurant right opposite the bus stop. Walk round to the outside terrace for direct views of the Caminito and a well earned drink. I really wish I had known about this hotel before our visit as it’s the perfect location to the Caminito del Rey to stay over for a night or two and explore the area more. It has so much rustic charm and gorgeous views over the lake and the final stretch of the Caminito del Rey.
            </p>
             <p>
                The bus was punctual and the ride back to the car and North entrance took only about 15 minutes. The bus takes you just past the car park and drops you right at El Kiosko and the entrance tunnel to the start of the route. All in all the walk took a total us of 2 hours 30 minutes, including the short walk leading to the start of the Caminito del Rey.
            </p>
             <p>
                If I could summarise, this walk is as close you will ever come to feeling like you are part of a Indiana Jones movie. The clear glass viewing platform, if you dare to step onto it is a reminder of how unnaturally high up you are, even more apparent if you are afraid of heights. It is unlike any other place you will ever go to and even though some say it has lost its edge, if you are an adrenaline junkie then I believe you cannot come to the Malaga region and not walk the Caminito del Rey.
            </p>

            <div className="mt-12">
                <Card className="bg-background-alt">
                    <CardHeader>
                        <CardTitle className="text-h3">Essential Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                            <li className="flex items-start"><Water className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" /><span>Bring plenty of water, snacks, and sunscreen.</span></li>
                            <li className="flex items-start"><Backpack className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" /><span>Only small backpacks are allowed; large bags are not permitted.</span></li>
                            <li className="flex items-start"><Footprints className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" /><span>Wear comfortable clothing and footwear (hiking shoes are best but trainers are adequate).</span></li>
                            <li className="flex items-start"><Ban className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" /><span>Pets are not allowed.</span></li>
                            <li className="flex items-start"><Toilet className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" /><span>There are no toilets along the path itself.</span></li>
                            <li className="flex items-start"><XCircle className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" /><span>The walk may occasionally close due to bad weather; refunds are not offered.</span></li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

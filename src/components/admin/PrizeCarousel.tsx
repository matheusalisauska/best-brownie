
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from '@/components/ui/carousel';
import { Prize } from '@/types';
import { PrizeAdminCard } from './PrizeAdminCard';

interface PrizeCarouselProps {
    prizes: Prize[];
}

export function PrizeCarousel({ prizes }: PrizeCarouselProps) {
    return (
        <Carousel className='w-screen -mx-6 '>
            <CarouselContent>
                {prizes.map((prize, index) => (
                    <CarouselItem key={index} className='basis-[50%]'>
                        <div className='px-6'>
                            <PrizeAdminCard prize={prize} key={index} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

        </Carousel>
    );
}

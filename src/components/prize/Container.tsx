import { cn } from '@/lib/utils';

interface ContainerProps {
    title: string;
    titleClassname?: string;
    children: React.ReactNode;
}

export const Container = ({
    title,
    titleClassname,
    children,
}: ContainerProps) => {
    return (
        <section className='flex flex-col gap-5'>
            <h2 className={cn(titleClassname, 'text-lg font-semibold')}>
                {title}
            </h2>
            {children}
        </section>
    );
};

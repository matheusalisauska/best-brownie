interface WrapperListProps {
    children: React.ReactNode;
}

export const WrapperList = ({ children }: WrapperListProps) => {
    return <div className='flex flex-col gap-6 sm:grid sm:grid-cols-2'>{children}</div>;
};

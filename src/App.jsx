import { IconBrandGoogle } from '@tabler/icons';
import { clsx } from 'clsx';

export default function App() {
    return (
        <div className={'flex justify-center items-center gap-x-4 min-h-screen bg-slate-900'}>
            <Button type={'button'} onClick={() => console.log('Hello Google')}>
                <IconBrandGoogle />
                Google
            </Button>

            <Button text={'Login'} className={'bg-red-500'} />
            <Button text={'Login'} className={'bg-yellow-900'} />
        </div>
    );
}

function Button(props) {
    const { children, text, className = 'bg-blue-600' } = props;
    return (
        <button
            {...props}
            className={clsx(className, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex gap-x-3 text-white rounded-lg py-2 px-5 font-bold')}>
            {text || children}
        </button>
    );
}

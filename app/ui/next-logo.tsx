import { LightBulbIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function NextLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[40px]">Code</p>
      <LightBulbIcon className="h-12 w-12 rotate-[15deg]" />
    </div>
  );
}

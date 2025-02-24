import { DropdownMenu } from 'radix-ui';

const langSvg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-languages stroke-accent-foreground'>
    <path d='m5 8 6 6' />
    <path d='m4 14 6-6 2-3' />
    <path d='M2 5h12' />
    <path d='M7 2h1' />
    <path d='m22 22-5-10-5 10' />
    <path d='M14 18h6' />
  </svg>
);

const downArrowSvg = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-chevron-down stroke-accent-foreground'>
    <path d='m6 9 6 6 6-6' />
  </svg>
);

export default function LanguagePicker(props: Record<string, any>) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className='cursor-pointer rounded p-2 text-lg capitalize focus:ring focus:outline-0'>
        <span className='flex items-center gap-3'>
          {langSvg} {props.displayLanguage} {downArrowSvg}
        </span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className='border-primary-foreground flex w-[80px] cursor-pointer items-center justify-between gap-1 rounded-lg'>
        <DropdownMenu.Item
          className='focus:underline focus:outline-0'
          onSelect={() => {
            location.assign(props.roLink.url);
          }}>
          <a className='text-lg capitalize' href={props.roLink.url}>
            {props.roLink.text}
          </a>
        </DropdownMenu.Item>
        <span className='text-lg'>|</span>
        <DropdownMenu.Item
          className='focus:underline focus:outline-0'
          onSelect={() => {
            location.assign(props.enLink.url);
          }}>
          <a className='text-lg capitalize' href={props.enLink.url}>
            {props.enLink.text}
          </a>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

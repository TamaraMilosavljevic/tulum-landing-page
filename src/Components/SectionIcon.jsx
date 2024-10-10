import { MapIcon, MegaphoneIcon, TicketIcon, UserCircleIcon} from "@heroicons/react/24/solid"

const icons= {
  map: MapIcon,
  hosting: MegaphoneIcon,
  tickets: TicketIcon,
  userIcon: UserCircleIcon,
}
// eslint-disable-next-line react/prop-types
export const SectionIcon = ({iconName}) => {
  const Icon = icons[iconName];
  return (
    <div className='w-12 h-12 rounded-lg flex items-center justify-center p-1'  style={{ background: 'linear-gradient(rgb(118,58,241) 0%, rgb(96,102,244) 100%)' }}>
     {Icon && <Icon fill="white" className='w-full' />}
    </div>
  );
}

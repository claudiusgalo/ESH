import { createUrqlClient } from '@/utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';

interface WrapperProps {
	children: React.ReactNode;
	variant?: 'small' | 'regular';
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
	return <div className='min-h-screen min-w-screen'>{children}</div>;
};
export default withUrqlClient(createUrqlClient, { ssr: false })(Wrapper);

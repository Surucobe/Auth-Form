import React from 'react';
import { Grid } from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

import Nav from './Nav'

const Layout = ({ children }) => {
	return(
		<Grid
			minH='100vh'
			templateColumns='repeat(3, 1fr)'
			hap={6}
			p={3}
		>
			<ColorModeSwitcher position='absolute' top={3} right={3} />
				<Nav />
				{children}
		</Grid>
		)
};

export default Layout;

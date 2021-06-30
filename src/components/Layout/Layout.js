import React from 'react';
import { Grid } from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';

const Layout = (props) => {
	return(
		<Grid>
			{children}
		</Grid>
		)
};

export default Layout;

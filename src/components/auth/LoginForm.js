import React from 'react';
import { useForm } from 'react-hook-form';
import { Heading, GridItem, Alert, AlertIcon, FormLabel, FormControl, Input, Button } from '@chakra-ui/react'

import { useAuth } from '../../Hooks/useAuth';

const LoginForm = () => {
	const { handleSubmit, register, errors, setError, formState } = useForm();

	const { sendSignInLinkToEmail } = useAuth();

	const onSubmit = (data) =>{
		try{
			await sendSignInLinkToEmail(data.email);
		}catch(error){
			setError('email'), {
				type: 'manual',
				message: error.message
			}
		}
	}

	return(
		<GridItem></GridItem>
		)
}

export default LoginForm;

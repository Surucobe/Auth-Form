import React from 'react';
import { useForm } from 'react-hook-form';
import {
	Heading, GridItem, Alert, AlertIcon, FormLabel, FormControl, Input, Button
} from '@chakra-ui/react';

import { useAuth } from '../../Hooks/useAuth';

const LoginForm = () => {
	const { handleSubmit, register, setError, formState, formState: { errors } } = useForm();

	const { sendSignInLinkToEmail } = useAuth();

	const onSubmit = async(data) =>{
		console.log(data)
		try{
			await sendSignInLinkToEmail(data.email);
		} catch (error) {
			setError('email', 
			{
				type: 'manual',
				message: error.message,
			});
		}
	}

	return(
		<GridItem
			colStart={[1, null, null, 2, null, null]}
			colSpan={[3, null, null, 1, null, null]}
			p={6}
		>
			<Heading as="h1" mb={6}>Login</Heading>
			{errors.email && (
				<Alert status='error' variant='subtle' mt={6} mb={6} >
					<AlertIcon />
					{errors.email.message}
				</Alert>
				)}
			{formState.isSubmitSuccessful && (
				<Alert status='success' variant='subtle' mt={6} mb={6} >
					<AlertIcon />
					Check your email to complete your login!
				</Alert>
				)}
			<form onSubmit={handleSubmit(onSubmit)} >
				<FormControl>
					<FormLabel htmlFor="email">Email</FormLabel>
					<Input name="email" placeholder="Email" {...register('email')} />
					<Button 
						mt={6} colorScheme="teal" type="submit"
						isLoading={formState.isSubmitting} 
					>
						Submit
					</Button>
				</FormControl>
			</form>
		</GridItem>
		)
}

export default LoginForm;

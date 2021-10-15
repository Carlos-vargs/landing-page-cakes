import React from 'react';
import Layout from './components/Layout';
import { ChakraProvider } from "@chakra-ui/react"
import Section1 from './components/sections/section1/Section1';
import Section2 from './components/sections/section2/Section2';
import Section3 from './components/sections/section3/Section3';
import Section4 from './components/sections/section4/Section4';
import Section5 from './components/sections/section5/Section5';
import Section6 from './components/sections/section6/Section6';
import Section7 from './components/sections/section7/Section7';
import Section8 from './components/sections/section8/Section8';
import Section9 from './components/sections/section9/Section9';

export default function App() {

	return (
		<ChakraProvider>
			<Layout>
				<Section1 />
				<Section2 />
				<Section3 />
				<Section4 />
				<Section5 />
				<Section6 />
				<Section7 />
				<Section8 />
				<Section9 />
			</Layout>
		</ChakraProvider>
	);
}

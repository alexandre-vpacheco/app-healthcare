import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../Pages/Login/Login.js';
import Cadastro from '../Pages/Cadastro/Cadastro.js';
import Home from '../Pages/Home/Home.js';
import Agenda from '../Pages/Agenda/Agenda.js';
import Agendar from '../Pages/Agendar/Agendar.js';
import Ajuda from '../Pages/Ajuda/Ajuda.js';
import Contatos from '../Pages/Contatos/Contatos.js';
import Hospitais from '../Pages/Hospitais/Hospitais.js';
import Perfil from '../Pages/Perfil/Perfil.js';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Agenda"
                component={Agenda}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Agendar"
                component={Agendar}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Ajuda"
                component={Ajuda}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Contatos"
                component={Contatos}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Hospitais"
                component={Hospitais}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Perfil"
                component={Perfil}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
};
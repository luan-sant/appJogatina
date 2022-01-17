import React, { useState } from 'react'; { }
import {
    Text,
    View,
    TextInput,
    Image,
    

} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import logo from '../../assets/logo.png'
import { styles } from './styles'

export function SignIn() { // se colocar export default deve ser exportado sem {}
    const [text, setText] = useState('Luan');

    return (
        <View style={styles.container}>

            <Image
                source={logo}
                style={styles.image}
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize {'\n'}
                    suas jogatinas. {'\n'}
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon 
                    title="Entrar com Discord"
                    activeOpacity={0.7}
                    />
                    
            </View>
        </View>
    );
}


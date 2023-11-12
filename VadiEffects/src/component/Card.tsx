// Card.tsx

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Sound from 'react-native-sound';

interface CardProps {
    title: string;
    content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
    const playSound = () => {
        const sound = new Sound('./babayigit.wav', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('Ses dosyası yüklenirken hata oluştu', error);
                return;
            }
            sound.play(() => {
                sound.release();
            });
        });
    };

    return (
        <TouchableOpacity onPress={playSound}>
            <View style={tw`bg-white p-6 rounded-lg shadow-md mb-6 w-64 h-64`}>
                <View style={tw`flex-1 justify-center items-center`}>
                    <Image source={require('../assets/images/pala.png')} style={tw`w-24 h-24`} />
                    <Text style={tw`text-xl font-bold mb-2 mt-2`}>{title}</Text>
                </View>
                <Text>{content}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Card;

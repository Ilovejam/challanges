import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import Card from '../component/Card';

const Dashboard: React.FC = () => {
    return (
        <View style={tw `flex-1 items-center justify-center`}>
            <Text style={tw `text-6xl font-bold`}>Welcome to the Dashboard!</Text>
            <Card title="Title" content="Content" />
            <Card title="Title" content="Content" />
            <Card title="Title" content="Content" />

        </View>
    );
};

export default Dashboard;


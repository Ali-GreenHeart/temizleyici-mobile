import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios'; // Or you can use fetch
import { BE_URL } from '@/constants/api';
import { useLocalSearchParams, useSearchParams } from 'expo-router/build/hooks';
import { useToken } from '@/context/AuthProvider';
import { router } from 'expo-router';
import icons from '@/constants/icons';
import { useToast } from 'expo-toast';

interface Event {
    _id: string;
    createdAt: string;
    date: string;
    description: string;
    hour: string;
    location: string;
    name: string;
    photo: string;
    type: string;
    updatedAt: string;
    userIds: string[];
}

export default function EventByIdPage() {
    const { id } = useLocalSearchParams();
    const [event, setEvent] = useState<Event | null>(null);
    const token = useToken()
    const toast = useToast()
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        if (id) {

            const fetchEvent = async () => {
                try {
                    setLoading(true);
                    const response = await axios.get(`${BE_URL}user/events/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        }
                    });
                    setEvent(response.data);
                } catch (error) {
                    console.error("Error fetching event:", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchEvent();
        }
    }, [id]);

    const handleConnect = async () => {
        try {
            setLoading(true);
            await axios.post(`${BE_URL}user/events/${id}`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            toast.show("Tədbirə qoşuldunuz!")
        } catch (error) {
            console.error("Error connecting to event:", error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <View className={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (!event) {
        return (
            <View className={styles.container}>
                <Text className={styles.errorText}>Event not found</Text>
            </View>
        );
    }

    return (
        <ScrollView className={styles.container}>
            <View className="flex flex-row items-center mt-5">
                <TouchableOpacity
                    className='my-2'
                    onPress={() => router.push('/allevents')}
                >
                    <Image source={icons.backArrow} className="size-8" />
                </TouchableOpacity>
                <Text className="text-2xl mb-4 font-lexend-bold color-gray-800 px-3">
                    Bütün tədbirlər
                </Text>
            </View>
            <Image source={{ uri: event.photo }} className={styles.eventImage} />
            <Text className={styles.eventName}>{event.name}</Text>
            <Text className={styles.eventDate}>{event.date} - {event.hour}</Text>
            <Text className={styles.eventDescription}>{event.description}</Text>
            <View className={styles.locationContainer}>
                <Text className={styles.locationText}>Location:</Text>
                <View className={styles.location}>
                    <Text>{event.location}</Text>
                </View>
            </View>
            <TouchableOpacity
                className='my-2 mb-10 bg-primary p-2 rounded-lg items-center justify-center'
                onPress={handleConnect}
            >
                <Text className='text-white'>Tədbirə qoşul</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = {
    container: 'flex-1 p-4',
    loadingContainer: 'flex-1 justify-center items-center',
    errorText: 'text-red-500 text-center text-lg',
    eventImage: 'w-full h-48 object-cover rounded-lg mb-4',
    eventName: 'text-2xl font-bold text-blue-600 mb-2',
    eventDate: 'text-lg text-gray-600 mb-2',
    eventDescription: 'text-base text-gray-800 mb-4',
    locationContainer: 'bg-gray-100 p-4 rounded-lg mt-4',
    locationText: 'text-lg font-semibold',
    location: 'bg-white p-2 mt-2 rounded-lg',
}

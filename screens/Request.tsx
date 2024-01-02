import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { Text, Icon } from '@rneui/themed';
import { Card } from '@rneui/themed';
import BlankSpacer from 'react-native-blank-spacer';


let styles = StyleSheet.create({
    backbutton: {
        alignSelf: 'flex-start',
        padding: 25,
        paddingTop: 40,
        paddingLeft: 24,
    },
    container: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0
    },
    outputtext: {
        color: '#49108B',
        fontWeight: 'normal',
        fontFamily: 'Roboto',
        padding: 8,
        backgroundColor: '#E5D9FF',
        borderRadius: 10,
    },
    heading: {
        fontSize: 23,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#49108B',
        paddingLeft: 3
    },
    leadingtext: {
        fontWeight: '700',
        fontFamily: 'Roboto',
        color: '#49108B',
        fontSize: 15,
        padding: 5,
        paddingTop: 10,
    },
    shadowProp: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 10,
    },
    dualbox: {
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    buttons: {
        borderRadius: 24,
        padding: 10,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }

},);

interface RiderData {
    name: string;
    email: string;
    phone: string;
    gender: string;
    age: number;
    from: string;
    to: string;
    date: string;
    Vehicle: string;
}

const Request = () => {

    const riderData: RiderData = require('../data/rider.json');//modify to add path of anotherjson
    const {
        name,
        email,
        phone,
        gender,
        age,
        from,
        to,
        date,
        Vehicle
    } = riderData;

    return (

        <>
            <TouchableOpacity style={styles.backbutton}>
                <Image source={require('../assets/alc.png')} style={{ width: 42, height: 42 }} />
            </TouchableOpacity>
            <View style={[styles.container]}>
                <Text style={[styles.heading, { fontSize: 38, }]}>Host Details</Text>
                <Card containerStyle={{ borderRadius: 10, ...styles.shadowProp, paddingBottom: 10 }}>
                    <Text style={styles.heading}>Personal Details</Text>
                    <Text style={styles.leadingtext}>Name</Text>
                    <Text style={styles.outputtext}>{name}</Text>
                    <Text style={styles.leadingtext}>Email</Text>
                    <Text style={styles.outputtext}>{email}</Text>
                    <Text style={styles.leadingtext}>Phone</Text>
                    <Text style={[styles.outputtext]}>{phone}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-evenly' }}>
                        <View style={[styles.dualbox, { width: '50%', padding: 5 }]}>
                            <Text style={styles.leadingtext}>Gender</Text>
                            <Text style={styles.outputtext}>{gender}</Text>
                        </View>
                        <View style={[styles.dualbox, { width: '50%', padding: 5 }]}>
                            <Text style={styles.leadingtext}>Age</Text>
                            <Text style={[styles.outputtext]}>{age}</Text>
                        </View>
                    </View>
                    <Text style={[styles.outputtext, { margin: 8, paddingLeft: 18 }]}><Icon name='place' size={20} />{from}</Text>
                    <Text style={[styles.outputtext, { margin: 8, paddingLeft: 18 }]}><Icon name='place' size={20} />{to}</Text>
                    <Text style={[styles.outputtext, { margin: 8, paddingLeft: 18 }]}><Icon name='event' size={20} />{date}</Text>
                    <Text style={[styles.outputtext, { margin: 8, paddingLeft: 18 }]}><Icon name='commute' size={20} />{Vehicle}</Text>
                </Card>
                <BlankSpacer height={15} />
                <TouchableOpacity style={[styles.buttons, { backgroundColor: '#7E30E1' }]}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', padding: 3 }}>Remove</Text>
                </TouchableOpacity>
            </View></>

    );
};

export default Request;
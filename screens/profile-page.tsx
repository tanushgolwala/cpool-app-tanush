import React from "react";
import AppColors from "../design-system/colors";
import RideCard from "../components/rideCard";
import PersonalDetailsCard from "../components/personalDetailsCard";
import personalInfo from '../data/riderData.json';
import { View, ScrollView, StyleSheet, Image, Button, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";


type RootStackParamList = {
    JoinRide: undefined;
    availableRides: undefined;
    interestedRider: undefined;
    hostRide: undefined;
    details: undefined;
    profileCreation: undefined;
    accept: undefined;
    remove: undefined;
    filtermodal: undefined;
  };
interface DashboardProps{
    navigation: StackNavigationProp<RootStackParamList>;
}

  
    const Dashboard: React.FC<DashboardProps> = ({ navigation })=>{
        interface CardData {
            startingLocation: string;
            destination: string;
            date: Date;
            time: Date;
            cost: number;
            hostProfilePic: string;
            hostName: string;
        };
    
          interface PersonalData{
    
            name: string;
            email: string;
            contactNumber: string;
            gender:string;
            yob:number;
        };
        
        const jsonData: PersonalData[] = personalInfo as unknown as PersonalData[];
        const jsonData2: CardData[] = personalInfo as unknown as CardData[];
        
        return(
            
            <>
                <View style={styles.backbutton}>
                <TouchableOpacity style={styles.backbutton} onPress={()=>{
                    navigation.pop();
                }}>
                    <Image source={require('../assets/alc.png')} style={{ width: 42, height: 42 }} />
                </TouchableOpacity>

                
                    


                    <Text style={styles.dashboard}>
                            Dashboard
                    </Text>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.parentContainer}>
                            {jsonData.map((cardData, index) => (
                                <PersonalDetailsCard key={index} personalInfo={cardData}/>
                            ))}

                            <Text style={styles.text}>
                                Upcoming Trips
                            </Text>
                            {jsonData2.map((cardData, index) => (
                                <RideCard key={index} data={cardData} />
                            ))}
                            <Text style={styles.text}>
                                Past Trips
                            </Text>
                            {jsonData2.map((cardData, index) => (
                                <RideCard key={index} data={cardData} />
                            ))}
                        </View>
                        
                    </ScrollView>
                    


                </View>
            </>
            
        );
    };
      
      




const styles = StyleSheet.create({
    mainView:{
        flex:1,
        padding: 0
    },

    scroller:{
        alignContent: 'center',
    },

    parentContainer:{
        alignContent: 'center'
    },

    backbutton: {
        alignSelf: 'flex-start',
        padding: 25,
        paddingTop: 40,
        paddingLeft: 24,
        
      },

      dashboard:{
        fontSize: 32,
        fontWeight: "bold",
        color: AppColors.text,
        marginBottom: 10,
        textAlign: 'center'
      },

      text:{

        fontSize: 24,
        fontWeight: "bold",
        color: AppColors.text,
        margin: 8
      }


  });

export default Dashboard;

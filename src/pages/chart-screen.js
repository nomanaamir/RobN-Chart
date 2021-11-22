

import { StyleSheet, Text, View, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from "react";
import {
    LineChart,
} from "react-native-wagmi-charts";
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const { width, height, fontScale } = Dimensions.get("window")




export default function ChartScreen() {


    const data = [
        {
            timestamp: Math.random() * 100,
            value: Math.random() * 100,
        },
        {
            timestamp: Math.random() * 100,
            value: Math.random() * 100
        },
        {
            timestamp: Math.random() * 100,
            value: Math.random() * 100
        },
        {
            timestamp: Math.random() * 100,
            value: Math.random() * 100
        }
    ]
    const map = [data.timestamp].map(timestamp => 100 * Math.floor(Math.random() * 10000));

    const [theme, setTheme] = useState('sell');



    const sellThemeColor = {
        color: '#0047AB'
    }

    const buyThemeColor = {
        color: 'orange'
    }

    const sellThemeBackgroundColor = {

        backgroundColor: '#030c15',
    }

    const buyThemeBackgroundColor = {

        backgroundColor: 'white',
    }

    const sellDetailBackground = {

        backgroundColor: '#2e353f',
    }

    const buyDetailBackground = {

        backgroundColor: '#FCF5E5',
    }

    const sellchart = {

        borderBottomWidth: 1,
        borderColor: 'white',
    }

    const buychart = {

        borderBottomWidth: 1,
        borderColor: 'black',
    }


    const [activeTab, setActiveTab] = useState(0);

    function changeTab(index) {
        setActiveTab(index)
    };

    const tabs = [
        {
            name: "1D",
        },
        {
            name: "1W",
        },
        {
            name: "1M",
        },
        {
            name: "6M",
        },
        {
            name: "1Y",
        },
        {
            name: "ALL",
        },
    ]


    const activeBlueBorder = {
        borderColor: '#0047AB',
        borderBottomWidth: 1
    }

    const activeOrangeBorder = {
        borderColor: 'orange',
        borderBottomWidth: 1
    }

    const activeWhiteFont = {
        color: 'white'
    }
    const activeBlackFont = {
        color: 'black'
    }
    function PriceText(value) {
        'worklet';
        return (value = Math.floor(Math.random() * 100));

    }
    console.log(theme)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">

                <View style={[styles.chartConatiner, theme === 'sell' ? sellThemeBackgroundColor : buyThemeBackgroundColor]}>
                    <LineChart.Provider data={data}>
                        <View style={styles.heading}>
                            <View style={styles.price}>
                                <LineChart.PriceText
                            
                                    style={[styles.priceText, theme === 'sell' ? sellThemeColor : buyThemeColor]}
                                    format={({ value }) => {
                                        'worklet';
                                        const formattedPrice = PriceText(value);
                                        return `${formattedPrice} `;

                                    }}
                                />
                                <Text  style={[styles.currency, theme === 'sell' ? sellThemeColor : buyThemeColor]}> GNF </Text>
                            </View>
                            <Text style={[styles.text, theme === 'sell' ? sellThemeColor : buyThemeColor]}>+$ {map} [0.20%]</Text>
                        </View>
                        <View  style={[theme === 'sell' ? sellchart : buychart]} >
                            <LineChart width={width} height={250} >
                                <LineChart.Path color={theme === 'sell' ? '#0047AB' : 'orange'} />
                            </LineChart>
                        </View>
                    </LineChart.Provider>
                    <View style={styles.tabs}>

                        {
                            tabs.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} style={[styles.tab,  activeTab === index ? (theme === 'sell' ? activeBlueBorder : activeOrangeBorder) : null]} onPress={() => changeTab(index)}>
                                        <Text style={[theme === 'sell' ? sellThemeColor : buyThemeColor, activeTab === index ? (theme === 'sell' ? activeWhiteFont : activeBlackFont) : null]}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>



                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn} onPress={() => setTheme('sell')}>
                            <Text style={styles.btnText}>
                                Sell
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.btn} onPress={() => setTheme('buy')}>
                            <Text style={styles.btnText}>
                                Buy
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View  style={[styles.details, theme === 'sell' ? sellDetailBackground : buyDetailBackground]}>

                        <Text  style={[styles.detailBoxlabel, theme === 'sell' ? sellThemeColor : buyThemeColor]}>Conakry Index</Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#030c15',
        flex: 1,
    },
    chartConatiner: {
        height: height

    },
    heading: {
        height: height / 4,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: '#030c15',

    },
    text: {
        fontSize: 18,
        fontWeight: "normal",
        color: "#05c795"
    },
    price: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },

    priceText:{
        fontSize: 70,
        fontWeight: "normal",

    },
    currency: {
        color: "white",
        alignItems: "center",
    },


    tabs: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        maxHeight: 60

    },
    tab: {
        padding: 5,
        paddingRight: 8,
        paddingLeft: 8,
    },


    btnContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        width: '100%',
        alignItems: 'center',
        maxHeight: 80

    },

    btn: {

        width: width / 2.4,
        backgroundColor: '#05c795',
        height: 40,
        maxHeight: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2

    },
    btnText: {
        color: 'white',
        fontSize: fontScale * 14,
        letterSpacing: 1
    },
    details: {
        flexDirection: 'row',
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        height: height / 8,
        alignItems: 'center',
    },


    detailBoxlabel: {
        color: "white",
        fontSize: fontScale * 20,
    }
});

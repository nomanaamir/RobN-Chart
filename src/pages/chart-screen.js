

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

    const details = [
        {
            title: "11",
            label: "YOUR SHARES"
        },
        {
            title: "1,053.80",
            label: "EQUITY VALUE $"
        },
        {
            title: "89.10",
            label: "AVG COST %"
        },
    ]
    const activeTabBorder = {
        borderColor: '#05c795',
        borderBottomWidth: 1
    }
    const activeText = {
        color: 'white'
    }
    function PriceText(value) {
        'worklet';
        return (value = Math.floor(Math.random() * 100));

    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <LineChart.Provider data={data}>
                    <View style={styles.heading}>
                        <View style={styles.price}>
                            <LineChart.PriceText
                                style={{
                                    color: "white",
                                    fontSize: 70,
                                    fontWeight: "normal",
                                }}
                                format={({ value }) => {
                                    'worklet';
                                    const formattedPrice = PriceText(value);
                                    return `${formattedPrice} `;

                                }}
                            />
                            <Text style={styles.currency}> GNF </Text>
                        </View>
                        <Text style={styles.text}>+$ {map} [0.20%]</Text>
                    </View>
                    <View style={styles.chart} >
                        <LineChart width={width} height={250} >
                            <LineChart.Path color="#05c795" />
                        </LineChart>
                    </View>
                </LineChart.Provider>
                <View style={styles.tabs}>

                    {
                        tabs.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={[styles.tab, activeTab === index ? activeTabBorder : null]} onPress={() => changeTab(index)}>
                                    <Text style={[styles.tabsTexts, activeTab === index ? activeText : null]}>{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>



                <View style={styles.btnContainer}>

                    <View style={styles.btn}>
                        <Button
                            title="Sell"
                            color="#05c795"
                            height="30"
                            maxHeight="30"
                        />
                    </View>

                    <View style={styles.btn}>
                        <Button
                            title="Buy"
                            color="#05c795"
                            height="30"
                            maxHeight="30"
                        />
                    </View>
                </View>

                <View style={styles.details}>

                    {
                        details.map((item, index) => {
                            return (
                                <View key={index} >
                                    <View style={styles.detailBox}>
                                        <Text style={styles.detailBoxtitle}>{item.title}</Text>
                                        <Text style={styles.detailBoxlabel}>{item.label}</Text>

                                    </View>
                                </View>
                            )
                        })
                    }
                </View>

            </ScrollView>
        </SafeAreaView >

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#030c15',
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10
    },
    chartConatiner: {
        width: '100%'
    },
    heading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#030c15',

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
    currency: {
        color: "white",
        alignItems: "center",
    },
    chart: {
        borderBottomWidth: 1,
        borderColor: 'white',
        borderStyle: 'dashed',

    },

    tabs: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 20

    },
    tab: {
        padding: 5,
        paddingRight: 8,
        paddingLeft: 8,
    },
    tabsTexts: {
        color: "#05c795"
    },

    btnContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,

    },

    btn: {
        width: 160,

    },

    details: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 20,
        borderColor: '#2e353f',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        padding: 10
    },

    detailBox: {
        flex: 1
    },

    detailBoxtitle: {
        color: "white",
        fontSize: fontScale * 20,
        fontFamily: 'sans-serif-thin'
    },

    detailBoxlabel: {
        color: "#8e959d",
        fontSize: fontScale * 11,
        fontFamily: 'sans-serif-thin'
    }
});

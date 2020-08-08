import React, { ReactNode } from 'react'
import { View, Image, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'

interface PageHeaderProps {
    title: string
    headerRigth?: ReactNode
}

import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const PageHeader: React.FC<PageHeaderProps>= ({ title, headerRigth, children }) => {

    const { navigate } = useNavigation()

    function handleGoback() {
        navigate('Landing')
    }

    return( 
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoback}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>
                <Image source={logoImg} resizeMode="contain" />
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>{ title }</Text>
                {headerRigth}
            </View>
        {children}
        </View>
    )   
}

export default PageHeader
import NetInfo from "@react-native-community/netinfo";

export const checkInternetConnection = async () => {
    let connection = await NetInfo.fetch()
    return connection.isConnected
}
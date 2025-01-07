import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import axios from 'axios';
import {Posts} from './DataFetching';

// servile file => import
// axios instance

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// request interceptor
api.interceptors.request.use(config => {
  console.log('Request was sent');
  return config;
});

// response interceptor
api.interceptors.response.use(response => {
  console.log('Response was received');
  return response;
});
const AxiosFetching = () => {
  const [data, setData] = React.useState<Posts[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const fetchListOfPosts = async () => {
    try {
      setLoading(true);
      const response = await api.get<Posts[]>('/posts');
      if (response.status === 200) {
        setData(response.data);
        setLoading(false);
      } else {
        setData([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchListOfPosts();
  }, []);
  const renderItem = ({item}: {item: Posts}) => {
    return (
      <View
        style={{
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#c6df0a',
          marginVertical: 8,
          marginHorizontal: 16,
        }}>
        <Text style={{fontSize: 16, textAlign: 'justify', fontWeight: 'bold'}}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default AxiosFetching;

const styles = StyleSheet.create({});

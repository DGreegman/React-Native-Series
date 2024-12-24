import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

interface Posts {
  id: number;
  title: string;
}
const DataFetching = () => {
  const [posts, setPosts] = React.useState<Posts[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const data: Posts[] = await response.json();
      if (data) {
        setPosts(data);
        setLoading(false);
      } else {
        setPosts([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchPosts();
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
          data={posts}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default DataFetching;

const styles = StyleSheet.create({});

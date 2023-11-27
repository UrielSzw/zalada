import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, StyledText } from '../../components';
import { styles } from './Profile.styles';
import { avatarImage } from '../../assets';
import { PATHS } from '../../routes/paths';

type Props = {
  navigation: any;
};

export const Profile: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.userContainer}>
        <Avatar img={avatarImage} big />
        <View style={{ marginLeft: 26 }}>
          <StyledText variant="h4" style={{ marginBottom: 8 }}>
            Andrea Hirata
          </StyledText>
          <StyledText color="gray30">hirata@gmail.com</StyledText>
        </View>
      </View>
      <StyledText variant="h2" style={{ marginBottom: 31 }}>
        User information
      </StyledText>
      <StyledText style={{ marginBottom: 22 }}>Username: Andrea Hirata</StyledText>
      <StyledText style={{ marginBottom: 22 }}>Email: hirata@gmail.com</StyledText>
      <StyledText>Password: ************</StyledText>
      <View style={styles.btnContainer}>
        <Button
          text="Logout"
          big
          primary
          style={styles.btn}
          onPress={() => {
            navigation.navigate(PATHS.LOGIN);
          }}
        />
      </View>
    </View>
  );
};

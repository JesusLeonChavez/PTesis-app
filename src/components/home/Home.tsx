import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { FloatingMenu } from "react-native-floating-action-menu";

import styles from "./Home.styles";
import { HomeProps as Props } from "./Home.types";
import AnimatedBackdrop from "components/global/AnimatedBackdrop/AnimatedBackdrop";
import HeaderScreen from "components/global/HeaderScreen/HeaderScreen";

import NoteIconSVG from "assets/images/icons/noteIcon.svg";
import SearchSVG from "assets/images/icons/searchIcon.svg";

// TODO: uncomment when new build is ready
// import CustomImage from "components/global/CustomImage/CustomImage";

const items = [
  { label: "Create task" },
  { label: "Create list" },
  { label: "Create tag" }
];

const Home: React.FC<Props> = props => {
  const { setOptions, goBack } = useNavigation();
  const now = dayjs();
  const [isOpen, setIsOpen] = useState(false);
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { dismissAll } = useBottomSheetModal();

  const handleItemPress = (item: { label: string }) => {
    console.log(item);
    bottomSheetRef.current?.present();
  };

  const closeBottomSheet = useCallback(() => {
    dismissAll();
  }, [dismissAll]);

  useEffect(() => {
    setOptions({
      header: () => <HeaderScreen onPressLeftButton={goBack} />
    });
  }, [setOptions, goBack]);

  return (
    <>
      <View style={styles.container}>
        {/* <CustomImage
          image={{
            url: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
          }}
          resizeMode="cover"
          customStyle={styles.image}
          placeHolderElement={userPlaceholderNode}
        /> */}
        <View style={styles.user}>
          <Image
            source={{
              uri: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
            }}
            style={styles.image}
          />
          <View style={styles.info}>
            <Text style={styles.name}>Hi Carla</Text>
            <Text style={styles.date}>{now.format("dddd, DD MMM")}</Text>
          </View>
        </View>
        <View style={styles.textInputWrapper}>
          <TouchableOpacity style={styles.searchIconWrapper}>
            <SearchSVG style={styles.searchIcon} />
          </TouchableOpacity>

          <TextInput placeholder="Search in your notes" style={styles.input} />
        </View>
        <View style={styles.emptyWrapper}>
          <NoteIconSVG />
          <Text style={styles.emptyText}>Your notes will appears here!</Text>
        </View>
      </View>
      <FloatingMenu
        items={items}
        isOpen={isOpen}
        onMenuToggle={(toggleMenu: boolean) => setIsOpen(toggleMenu)}
        onItemPress={handleItemPress}
      />
      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={["60%"]}
        backdropComponent={props => (
          <AnimatedBackdrop {...props} onPress={() => closeBottomSheet()} />
        )}
      >
        <Text>Hola</Text>
      </BottomSheetModal>
    </>
  );
};

Home.defaultProps = {};

export default Home;

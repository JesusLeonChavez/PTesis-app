import { BottomSheetModal } from "@gorhom/bottom-sheet";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import { t } from "i18n-js";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, ListRenderItem } from "react-native";
import { TouchableOpacity, FlatList } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { FloatingMenu } from "react-native-floating-action-menu";

import CreateCategoryBottomSheet from "../CreateCategoryBottomSheet/CreateCategoryBottomSheet";
import CreateTagBottomSheet from "../CreateTagBottomSheet/CreateTagBottomSheet";
import { menuItems } from "./Home.helpers";
import styles from "./Home.styles";
import { MenuItemEnum, MenuState } from "./Home.types";
import { FloatingMenuItem, HomeProps as Props } from "./Home.types";
import CategoryCard from "components/global/CategoryCard/CategoryCard";
import CustomImage from "components/global/CustomImage/CustomImage";
import TodoCard from "components/global/TodoCard/TodoCard";
import useAuth from "contexts/auth/auth.hooks";
import { StatisticsNavigatorPropList } from "navigation/HomeNavigator/HomeNavigator.types";
import { useFetchUser } from "services/user/user.services.hooks";
import { Category } from "types/global.types";

import NoteIconSVG from "assets/images/icons/noteIcon.svg";
import PlusDarkIconSVG from "assets/images/icons/plusDarkIcon.svg";
import SearchIconSVG from "assets/images/icons/searchIcon.svg";

const { CREATE_LIST, CREATE_TAG, CREATE_TASK } = MenuItemEnum;

const Home: React.FC<Props> = props => {
  const { navigate } = useNavigation<StatisticsNavigatorPropList>();
  const { data: user } = useFetchUser();
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const createTagBottomSheetRef = useRef<BottomSheetModal>(null);
  const createCategoryBottomSheetRef = useRef<BottomSheetModal>(null);
  const now = dayjs();
  const { uid } = useAuth();

  const { userData } = user ?? {};
  const { name } = userData ?? {};

  const handleItemPress = (item: FloatingMenuItem) => {
    const { id } = item;

    if (id === CREATE_TAG) {
      createTagBottomSheetRef.current?.present();
      return;
    }

    if (id === CREATE_LIST) {
      createCategoryBottomSheetRef.current?.present();
      return;
    }

    if (id === CREATE_TASK) {
      navigate("NewTask");
    }
  };

  const renderItemIcon = (item: FloatingMenuItem) => {
    const { icon } = item;
    return <View style={styles.icon}>{icon}</View>;
  };

  const renderMenuIcon = (menuState: MenuState) => {
    const { menuButtonDown } = menuState;
    return menuButtonDown ? <PlusDarkIconSVG /> : <PlusDarkIconSVG />;
  };

  const filterSearch = (text: any) => {
    if (text === "") return;
    console.log("FILTRAR NOTAS");
    // Make a request to firestore
    return text;
  };

  const handlePressCategory = (categoryName: string) => {
    navigate("Notes", { categoryName });
  };

  const renderItem: ListRenderItem<Category> = listItem => {
    const { item } = listItem;
    return <CategoryCard categorie={item} handlePress={handlePressCategory} />;
  };

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("users")
      .doc(uid)
      .collection("categories")
      .onSnapshot(async snapshot => {
        setCategories([]);

        const categoriesNames = snapshot.docs
          .map(doc => doc.data())
          .map(({ categoryName }) => categoryName);

        const categoriesTemp: Category[] = [];

        categoriesNames.forEach(async name => {
          const notes = await firestore()
            .collection("users")
            .doc(uid)
            .collection("tasks")
            .where("category", "==", name)
            .get();

          const notesSize = notes.size;
          categoriesTemp.push({ name, quantity: notesSize });
          setCategories(prev => [...prev, { name, quantity: notesSize }]);
        });
      });

    return unsubscribe;
  }, [uid]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.user}>
          <CustomImage
            image={{
              url: "https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg"
            }}
            resizeMode="cover"
            customStyle={styles.image}
          />
          <View style={styles.info}>
            <Text style={styles.name}>
              {t("home.welcome")} {name}
            </Text>
            <Text style={styles.date}>{now.format("dddd, DD MMM")}</Text>
          </View>
        </View>

        <View style={styles.textInputWrapper}>
          <TouchableOpacity style={styles.searchIconWrapper}>
            <SearchIconSVG style={styles.searchIcon} />
          </TouchableOpacity>
          <TextInput
            placeholder="Search in your notes"
            style={styles.input}
            onChange={text => filterSearch(text)}
          />
        </View>
        {/* Searchable TodoCard!  */}
        <View style={{ paddingTop: 8 }}>
          <TodoCard
            id="12"
            checked
            description="Something"
            date="34234"
            priority="1"
          />
        </View>

        {categories?.length === 0 ? (
          <View style={styles.emptyWrapper}>
            <NoteIconSVG />
            <Text style={styles.emptyText}>¡Tus notas aparecerán aquí!</Text>
          </View>
        ) : null}

        {categories?.length > 0 ? (
          <FlatList
            data={categories}
            keyExtractor={(_, idx) => idx.toString()}
            renderItem={renderItem}
            ListHeaderComponent={
              <View style={styles.headerListContainer}>
                <Text style={styles.headerListTitle}>Mis listas</Text>
              </View>
            }
          />
        ) : null}

        <CreateTagBottomSheet
          ref={createTagBottomSheetRef}
          onClose={() => setIsOpen(false)}
        />
        <CreateCategoryBottomSheet
          ref={createCategoryBottomSheetRef}
          onClose={() => setIsOpen(false)}
        />
      </View>

      <FloatingMenu
        items={menuItems}
        isOpen={isOpen}
        onMenuToggle={(toggleMenu: boolean) => setIsOpen(toggleMenu)}
        onItemPress={handleItemPress}
        dimmerStyle={styles.backdrop}
        renderItemIcon={renderItemIcon}
        renderMenuIcon={renderMenuIcon}
        borderColor={EStyleSheet.value("$palette.white")}
        backgroundDownColor={EStyleSheet.value("$palette.primaryColor")}
      />
    </>
  );
};

Home.defaultProps = {};

export default Home;

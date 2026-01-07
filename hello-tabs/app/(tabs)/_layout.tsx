import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Icon, Label, NativeTabs, VectorIcon } from 'expo-router/unstable-native-tabs';
import React from 'react';
import { DynamicColorIOS, Platform } from 'react-native';

export default function TabLayout() {
  return (
    <NativeTabs
      minimizeBehavior="never"
      labelStyle={{
        // For the text color
        color: DynamicColorIOS({
          dark: 'white',
          light: 'black',
        }),
      }}
      // For the selected icon color
      tintColor={DynamicColorIOS({
        dark: 'white',
        light: 'black',
      })}>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        {Platform.select({
          ios: <Icon sf={{ default: 'house', selected: 'house.fill' }} />,
          default: <Icon src={<VectorIcon family={MaterialIcons} name="home" />} />,
        })}
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="favs">
        <Label>Favorites</Label>
        {Platform.select({
          ios: <Icon sf={{ default: 'heart', selected: 'heart.fill' }} />,
          default: <Icon src={<VectorIcon family={MaterialIcons} name="favorite-border" />} />,
        })}
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Label>Settings</Label>
        {Platform.select({
          ios: <Icon sf={{ default: 'gear', selected: 'gear' }} />,
          default: <Icon src={<VectorIcon family={MaterialIcons} name="settings" />} />,
        })}
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search" role="search">
        <Label>Search</Label>
        {Platform.select({
          ios: <Icon sf={{ default: 'magnifyingglass', selected: 'magnifyingglass' }} />,
          default: <Icon src={<VectorIcon family={MaterialIcons} name="search" />} />,
        })}
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

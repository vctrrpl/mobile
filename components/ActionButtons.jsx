import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

// Custom SVG Icons
const LikeIcon = ({ size = 20, color = '#1F1F1F' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="m1.75 24h2.5c.965 0 1.75-.785 1.75-1.75v-.366c1.512.77 4.946 2.116 10.531 2.116h1.6c2.318 0 4.286-1.658 4.679-3.942l1.12-6.5c.238-1.387-.145-2.797-1.049-3.871-.903-1.072-2.227-1.687-3.63-1.687h-4.536c.283-.76.566-1.868.566-3.25 0-3.757-2.126-4.75-3.25-4.75-2.076 0-2.25 1.936-2.25 3.75 0 2.214-2.483 4.054-3.794 4.872-.067-.904-.816-1.622-1.737-1.622h-2.5c-.965 0-1.75.785-1.75 1.75v13.5c0 .965.785 1.75 1.75 1.75zm9.531-20.25c0-2.25.381-2.25.75-2.25.704 0 1.75.866 1.75 3.25 0 2.216-.868 3.574-.874 3.584-.153.23-.168.526-.037.77.13.244.385.396.661.396h5.72c.96 0 1.865.42 2.483 1.153.619.734.881 1.7.718 2.649l-1.12 6.5c-.269 1.562-1.615 2.697-3.201 2.697h-1.6c-6.803.001-10.211-2.127-10.531-2.338v-9.81c.833-.442 5.281-2.972 5.281-6.601zm-9.781 5c0-.138.112-.25.25-.25h2.5c.138 0 .25.112.25.25v13.5c0 .136-.114.25-.25.25h-2.5c-.138 0-.25-.112-.25-.25z"
      fill={color}
    />
  </Svg>
);

const LinkIcon = ({ size = 20, color = '#1F1F1F' }) => (
  <Svg width={size} height={size} viewBox="0 0 511.997 511.997">
    <Path
      d="M211.26,389.24l-60.331,60.331c-25.012,25.012-65.517,25.012-90.508,0.005c-24.996-24.996-24.996-65.505-0.005-90.496l120.683-120.683c24.991-24.992,65.5-24.992,90.491,0c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17c-41.654-41.654-109.177-41.654-150.831,0L30.247,328.909c-41.654,41.654-41.654,109.177,0,150.831c41.649,41.676,109.177,41.676,150.853,0l60.331-60.331c8.331-8.331,8.331-21.839,0-30.17S219.591,380.909,211.26,389.24z M479.751,30.24c-41.654-41.654-109.199-41.654-150.853,0l-72.384,72.384c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l72.384-72.384c24.991-24.992,65.521-24.992,90.513,0c24.991,24.991,24.991,65.5,0,90.491L316.845,283.638c-24.992,24.992-65.5,24.992-90.491,0c-8.331-8.331-21.839-8.331-30.17,0s-8.331,21.839,0,30.17c41.654,41.654,109.177,41.654,150.831,0l132.736-132.736C521.405,139.418,521.405,71.894,479.751,30.24z"
      fill={color}
    />
  </Svg>
);

const ShareIcon = ({ size = 20, color = '#1F1F1F' }) => (
  <Svg width={size} height={size} viewBox="0 0 128 128">
    <Path
      d="m8 116c-.305 0-.613-.035-.918-.105-1.805-.43-3.082-2.04-3.082-3.895 0-36.348 4.598-66.578 60-67.953v-28.047c0-1.59.941-3.027 2.395-3.664 1.449-.633 3.148-.359 4.32.727l52 48c.82.753 1.285 1.82 1.285 2.937s-.465 2.184-1.285 2.938l-52 48c-1.168 1.086-2.867 1.367-4.32.727-1.454-.638-2.395-2.075-2.395-3.665v-27.953c-38.004.91-45.016 14.93-52.422 29.742-.687 1.379-2.09 2.211-3.578 2.211zm60-40c2.211 0 4 1.789 4 4v22.863l42.102-38.863-42.102-38.863v22.863c0 2.211-1.789 4-4 4-44.188 0-53.703 17.09-55.574 44.387 8.285-11.129 22.406-20.387 55.574-20.387z"
      fill={color}
    />
  </Svg>
);

const SearchIcon = ({ size = 20, color = '#1F1F1F' }) => (
  <Svg width={size} height={size} viewBox="0 0 32 32">
    <Path
      d="m20.97 6.48c0 .827.673 1.5 1.5 1.5h4.92v-.08c0-.66-.26-1.29-.73-1.76l-3.86-3.86c-.47-.47-1.1-.73-1.76-.73h-.07z"
      fill={color}
    />
    <Path
      d="m29.736 28.913-2.278-2.278c1.417-2.023 1.234-4.834-.572-6.639-2.024-2.022-5.317-2.025-7.34 0-.981.98-1.521 2.283-1.521 3.67s.54 2.689 1.521 3.67c1.012 1.012 2.341 1.518 3.67 1.518 1.043 0 2.08-.322 2.969-.945l2.278 2.278c.176.176.406.264.637.264s.461-.088.637-.264c.351-.352.351-.922-.001-1.274zm-8.918-2.85c-.64-.64-.992-1.491-.992-2.396s.353-1.757.993-2.396c.66-.661 1.528-.992 2.397-.992.868 0 1.736.331 2.396.992 1.322 1.321 1.322 3.472 0 4.793-1.319 1.321-3.471 1.321-4.794-.001z"
      fill={color}
    />
    <Path
      d="m18.485 28.396c-1.264-1.264-1.96-2.943-1.96-4.73s.696-3.468 1.961-4.731c1.26-1.261 2.939-1.956 4.729-1.956 1.537 0 2.993.516 4.175 1.462v-8.961h-4.92c-1.66 0-3-1.34-3-3v-4.93h-13.47c-2.21 0-4 1.79-4 4v20c0 2.21 1.79 4 4 4h14.031c-.561-.304-1.082-.69-1.546-1.154z"
      fill={color}
    />
  </Svg>
);

export default function ActionButtons({
  itemType,
  itemId,
  onLike,
  onLink,
  onShare,
  onBookmark,
}) {
  const handleAction = (action) => {
    switch (action) {
      case 'like':
        onLike?.(itemType, itemId);
        break;
      case 'link':
        onLink?.(itemType, itemId);
        break;
      case 'share':
        onShare?.(itemType, itemId);
        break;
      case 'bookmark':
        onBookmark?.(itemType, itemId);
        break;
    }
  };

  return (
    <View style={styles.actionButtonsContainer}>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => handleAction('like')}
      >
        <View style={styles.iconContainer}>
          <LikeIcon size={18} color="#1F1F1F" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => handleAction('link')}
      >
        <View style={styles.iconContainer}>
          <LinkIcon size={18} color="#1F1F1F" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => handleAction('share')}
      >
        <View style={styles.iconContainer}>
          <ShareIcon size={18} color="#1F1F1F" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => handleAction('bookmark')}
      >
        <View style={styles.iconContainer}>
          <SearchIcon size={18} color="#1F1F1F" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  actionButton: {
    padding: 5,
  },
  iconContainer: {
    backgroundColor: '#ECECEC',
    borderRadius: 20,
    width: 82,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import { MotiView } from "moti";
import React from "react";
import { Image, Modal, StyleSheet } from "react-native";

type ImageLoaderType = {
  show: () => void;
  hide: () => void;
};

class ImageLoader {
  private static instance: ImageLoader;
  private isVisible: boolean = false;
  private setIsVisible: React.Dispatch<React.SetStateAction<boolean>> | null =
    null;

  private constructor() {}

  public static getInstance(): ImageLoader {
    if (!ImageLoader.instance) {
      ImageLoader.instance = new ImageLoader();
    }
    return ImageLoader.instance;
  }

  public setVisibilityHandler(
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    this.setIsVisible = setter;
  }

  public show() {
    if (this.setIsVisible) {
      this.setIsVisible(true);
      this.isVisible = true;
    }
  }

  public hide() {
    if (this.setIsVisible) {
      this.setIsVisible(false);
      this.isVisible = false;
    }
  }
}

export const ImageLoaderComponent: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    ImageLoader.getInstance().setVisibilityHandler(setIsVisible);
  }, []);

  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <MotiView style={styles.overlay}>
        <MotiView
          from={{
            rotate: "0deg",
          }}
          animate={{
            rotate: "360deg",
          }}
          transition={{
            type: "timing",
            duration: 1000,
            loop: true,
          }}
        >
          <Image
            source={require("@/assets/images/wakilni-logo.png")}
            style={styles.logo}
          />
        </MotiView>
      </MotiView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});

export const imageLoader: ImageLoaderType = {
  show: () => ImageLoader.getInstance().show(),
  hide: () => ImageLoader.getInstance().hide(),
};

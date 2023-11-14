import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function Result(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: "O meu IMC e:" + props.resultImc,
    });
  };

  return (
    <View style={styles.resultImc}>
        
      <Text style={styles.information}>{props.messageResult}</Text>

      <Text style={styles.numberResult}>{props.resultImc}</Text>
      <View style={styles.boxSharebutton}>
        <TouchableOpacity onPress={onShare} style={styles.shared}>
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

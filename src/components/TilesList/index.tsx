import React, { FC } from 'react';
import { View, ScrollView } from 'react-native';

import BalanceTile from '../BalanceTile';
import styles from './styles';

type Balance = {
  income: number;
  outcome: number;
  total: number;
}

type TilesListProps = {
  balance: Balance;
}

const TilesList: FC<TilesListProps> = ({ balance }) => {

  return (
    <View style={styles.tilesContainer}>
      <ScrollView
        style={{ width: '100%' }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <BalanceTile
          title="Balanço total"
          value={balance?.total}
          type="total"
        />

        <BalanceTile
          title="Entradas"
          value={balance?.income}
          type="income"
        />

        <BalanceTile
          title="Despesas"
          value={balance?.outcome}
          type="outcome"
        />
      </ScrollView>
    </View>
  )
}

export default TilesList;
/* eslint-disable no-param-reassign */
import { TPlayersState, TPlayersStore } from 'models';
import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const usePlayers = create<TPlayersStore>()(
  devtools(
    immer((set, get) => ({
      players: [] as TPlayersState,
      createPlayersStore: (length: number) =>
        set(
          {
            players: new Array(length).fill(null).map((_, i) => ({
              name: `P${i + 1}`,
              pairs: 0,
              moves: 0,
              isActive: i === 0,
            })),
          },
          true
        ),
      addMove: () => {
        const activeIdx = get().players.findIndex((player) => player.isActive);
        return set((state) => {
          state.players[activeIdx].moves += 1;
        });
      },
      addPoint: () => {
        const activeIdx = get().players.findIndex((player) => player.isActive);
        return set((state) => {
          state.players[activeIdx].pairs += 1;
        });
      },
      changePlayer: () => {
        const lastActiveIdx = get().players.findIndex(
          (player) => player.isActive
        );
        const nextActiveIdx =
          lastActiveIdx === get().players.length - 1 ? 0 : lastActiveIdx + 1;
        return set((state) => {
          state.players[lastActiveIdx].isActive = false;
          state.players[nextActiveIdx].isActive = true;
        });
      },
    }))
  )
);
export default usePlayers;

import { State, StateToken, Selector } from '@ngxs/store';
import { Lang } from '@shared/models';

interface LangStateModel {
  langs: Lang[];
  selected: Lang | null;
}

const LANG_STATE_TOKEN = new StateToken<LangStateModel>('lang');

@State<LangStateModel>({
  name: LANG_STATE_TOKEN,
  defaults: {
    langs: [{ code: 'en', name: 'English', sortOrder: 0 }],
    selected: { code: 'en', name: 'English', sortOrder: 0 }
  }
})
export class LangState {

  @Selector()
  static selected(state: LangStateModel) {
    // TODO: lang state selector
    return state.selected;
  }
}

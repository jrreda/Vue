const state = {
    notes: [],
    timestamps: [],
};

const mutations = {
    ADD_NOTE(state, payload) {
        let newNote = payload;
        state.notes.push(newNote);
    },
    ADD_TIMESTAMP(state, payload) {
        let newTimestamp = payload;
        state.timestamps.push(newTimestamp);
    },
};

const actions = {
    addNote(context, payload) {
        context.commit('ADD_NOTE', payload);
    },
    addTimestamp(context, payload) {
        context.commit('ADD_TIMESTAMP', payload);
    },
};

const getters = {
    getNotes     : state => state.notes,
    getTimestamps: state => state.timestamps,
    getNoteCount : state => state.notes.length,
};

const store = Vuex.createStore({
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
});


const inputComponent = {
    template: `<input
        placeholder="Enter a note..."
        v-model="input"
        @keyup.enter="monitorEnterKey"
        class="input is-small" 
        type="text">`,

    props: ["placeholder"],

    data() {
        return {
            input: '',
        }
    },

    methods: {
        monitorEnterKey() {
            this.$store.dispatch('addNote', this.input);
            this.$store.dispatch('addTimestamp', new Date().toLocaleString());
            this.input = '';
        },
    },
};

const noteCounterComponent = {
    template: `
        <div class="note-count">
            Note count: <strong>{{ noteCount }}</strong>
        </div>
    `,

    computed: {
        noteCount() {
            return this.$store.getters.getNoteCount;
        },
    }
}

const app = {
    components: {
        "input-component": inputComponent,
        "note-counter-component": noteCounterComponent,
    },

    computed: {
        notes() {
            return this.$store.getters.getNotes;
        },
        timestamps() {
            return this.$store.getters.getTimestamps;
        }
    },
};

Vue.createApp(app).use(store).mount("#app");

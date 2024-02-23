const emitter = mitt();

const inputComponent = {
    template: `<input
        :placeholder="placeholder"
        v-model="input"
        @keyup.enter="monitorEnterKey"
        class="input is-small" 
        type="text">`,

    props: ["placeholder"],

    emits: ['add-note'],

    data() {
        return {
            input: '',
        }
    },

    methods: {
        monitorEnterKey() {
            emitter.emit('add-note', {
                note: this.input,
                time: new Date().toLocaleString(),
            }),
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

    data() {
        return {
            noteCount: 0,
        }
    },

    created() {
        emitter.on('add-note', (event) => this.noteCount++);
    },
}

const app = {
    components: {
        "input-component": inputComponent,
        "note-counter-component": noteCounterComponent,
    },

    data() {
        return {
            notes: [],
            timestamps: [],
            placeholder: 'Enter a note',
            count: 0,
        }
    },

    created() {
        emitter.on('add-note', (event) => this.addNote(event));
    },

    methods: {
        addNote(event) {
            this.notes.push(event.note);
            this.timestamps.push(event.time);
        },
        updateCount() {
            this.count++;
        }
    },
};

Vue.createApp(app).mount("#app");

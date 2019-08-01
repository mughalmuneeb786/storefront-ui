import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfSidebar",
  props: {
    button: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "left"
    }
  },
  mounted() {
    const keydownHandler = e => {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        this.$emit("close");
      }
    };
    document.addEventListener("keydown", keydownHandler);
    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", keydownHandler);
    });
  },
  watch: {
    visible: {
      handler: value => {
        if (value && typeof window !== "undefined") {
          document.body.style.setProperty("overflow", "hidden");
        }
        if (!value && typeof window !== "undefined") {
          document.body.style.removeProperty("overflow");
        }
      },
      immediate: true
    }
  },
  components: {
    SfCircleIcon,
    SfIcon
  }
};
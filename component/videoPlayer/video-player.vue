<template>
    <div>
        <video ref="videoPlayer" id="player" preload="metadata" controls>
            <source :src="src">
        </video>
    </div>
</template>

<script lang="ts">
import {onMounted, ref} from "#imports";
import {useNuxt} from "@nuxt/kit";
import videojs from "video.js";

export default {
    name: "video-player",
    props:{
        src:{
            type: String,
            required: true
        },
        option:{
            type: Object,
            default: () => ({})
        }
    },

    setup(props, {refs}) {
        const nuxtInstance = useNuxt()
        const player = ref()

        onMounted(() => {
            player.value = videojs(this.$refs.videoPlayer, props.option, () => {
                player.value.log("onPlayerReady", nuxtInstance)
            })
        })

        // let video = videojs(String(Math.random()*1000), {
        //     children:{
        //         controlBar: {
        //             children:{
        //                 progressControl: false
        //             }
        //         }
        //     }
        // })

        return {
            player
        }
    }
}
</script>

<style scoped>

</style>
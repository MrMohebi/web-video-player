<template>
    <div class="flex-column center-content">
        <div class="tw-w-full tw-bg-red-500 tw-h-8"/>
        <div class="flex-column align-center tw-gap-8 tw-mt-4">
            <div class="tw-w-full">
                <div v-for="(item, index) in radioList" :key="`RB_${index}`" class="flex-row align-center tw-gap-3" @click="selectedType = item.key">
                    <input type="radio" :id="index" :name="item.key" :value="item.key">
                    <label :for="item.key">{{item.label}}</label>
                </div>
            </div>
            <div v-if="!!selectedType" class="flex-column align-center tw-gap-8">
                <input v-model="videoSrc" :placeholder="getPlaceholder" class="tw-text-center tw-text-2xl tw-rounded-xl tw-border-2 tw-w-[90vw] tw-h-14"/>
                <button class="tw-w-32 tw-py-2 tw-bg-blue-600 tw-text-center tw-rounded-md">
                    <span class="tw-text-white tw-text-2xl">Go</span>
                </button>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import {computed, ref} from "#imports"
export default {
    name: "index",

    setup() {
        const videoSrc = ref("")
        const selectedType = ref("")
        const radioList = [
            {
                key: "link",
                label:"Video via link"
            },
            {
                key: "file",
                label: "Upload file"
            },
        ]

        const getPlaceholder = computed(() => {
            if (selectedType.value === "link"){
                return "Enter the video link..."
            }else{
                return "Upload/Drag the file"
            }
        })
        return {
            videoSrc,
            radioList,
            selectedType,
            getPlaceholder,
        }
    }
}
</script>

<style scoped>

</style>
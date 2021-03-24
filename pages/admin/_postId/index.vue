<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/admin/AdminPostForm.vue'

export default {
    layout: 'admin',
    components: {
        AdminPostForm
    },
    data() {
        return {
            loadedPost: {
                author: 'Juliano',
                title: 'Awesome ass',
                content: 'Smo  dwmodm wodmo mwd',
                thumbnailLink: 'https://images.pexels.com/photos/6569318/pexels-photo-6569318.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',

            }
        }
    }
}

</script>

<style scoped>

    .update-form {
        width: 90%;
        margin: 20px auto;
    }

    @media (min-width: 768px) {
        .update-form {
            width: 500px;
        }
    }

</style>
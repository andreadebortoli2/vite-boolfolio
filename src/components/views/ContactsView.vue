<script>
export default {
    name: 'ContactsView',
}
</script>

<template>
    <section class="container">
        <h1>Contact me</h1>
        <form action="" method="post">
            <div class="wrapper">
                <div class="left">
                    <div class="name">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" name="name" id="name" aria-describedby="helpId"
                            placeholder="John Doe" />
                    </div>
                    <div class="email">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId"
                            placeholder="abc@mail.com" />
                    </div>
                </div>
                <div class="right">
                    <div class="message">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" name="message" id="message" rows="8">Type your message</textarea>
                    </div>
                </div>
            </div>
            <button type="submit">
                Send
            </button>
        </form>
    </section>
</template>

<style scoped>
.container {

    h1 {
        padding: 2rem;
    }

    form {
        border: 1px solid gray;
        border-radius: 1rem;
        padding: 1rem;

        .wrapper {
            display: flex;

            .left,
            .right {
                width: 50%;
                padding: 1rem;
            }

            input,
            textarea {
                width: 100%;
                margin: 1rem 0 2rem;
                padding: 0.5rem;
            }

            label {
                margin-left: 2rem;
            }
        }

        button {
            width: 100%;
            padding: 1rem 0;
            font-size: 1.5rem;

            &:hover {
                cursor: pointer;
                background-color: lightgray;
            }
        }
    }
}
</style>
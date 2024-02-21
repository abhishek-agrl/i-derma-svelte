<script lang="ts">
    import { Button } from "sveltestrap";
</script>

<div class="appointment-today-container">
    <h3>Fix An Appointment Today!</h3>
    <h1>Customised Care For Every Patient</h1>
    <Button color="success" href="https://wa.me/916263722729" style="margin-top: 30px;" target="_blank">
        <div class="book-button">
            <i class="bi bi-whatsapp" />
            Book Now
        </div>
    </Button>
</div>

<style lang="scss">
    .appointment-today-container {
        width: 100%;
        background-image: linear-gradient(
            45deg,
            rgb(255, 38, 0, 0.75),
            rgba(255, 255, 0, 0.75)
        );
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        padding-top: 50px;
        padding-bottom: 50px;
        h1 {
            text-align: center;
        }
        .btn:focus {
            .book-button {
                color: grey;
            }
        }
    }
</style>

import { Button,Container } from "@mui/material";

export default function home(){
  return(
    <Container fixed>
      <Button variant="contained" href="/signup">회원가입</Button>
    </Container>
  )
}
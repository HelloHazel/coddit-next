import InputGroup from "@/src/components/InputGroup";
import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 6px;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 360px;
`;

const Title = styled.h1`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
`;

const Button = styled.button`
  width: 100%;
  padding: 8px;
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background-color: gray;
  border: 1px solid gray;
  border-radius: 4px;
`;

const Small = styled.small`
  margin-top: 8px;
  font-size: 12px;
  text-transform: uppercase;
`;

function register() {
  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <Title>회원가입</Title>
          <form onSubmit={handleSubmit}>
            <InputGroup
              placeholder="Email"
              value={email}
              setValue={setEmail}
              error={errors.email}
            />
            <InputGroup
              placeholder="Username"
              value={username}
              setValue={setUsername}
              error={errors.username}
            />
            <InputGroup
              placeholder="Password"
              value={password}
              setValue={setPassword}
              error={errors.password}
            />
            <Button>회원 가입</Button>
          </form>
          <small>
            이미 가입하셨나요?
            <Link href="/login">
              <a className="ml-1 text-blue-500 uppercase">로그인</a>
            </Link>
          </small>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
}

export default register;

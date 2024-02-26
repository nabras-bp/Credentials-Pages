import {
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
  Box,
  Divider,
  AbsoluteCenter,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";

import { useState } from "react";

import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { BsEyeSlash } from "react-icons/bs";
import Header from "./Header";
import { Formik, Form, Field } from "formik";

const Login: React.FC = () => {
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);

  interface SubmitValues {
    email: string;
    password: string;
  }
  return (
    <Box w={{ base: "100vw", sm: "100vw", md: "100vw", lg: "65vw" }}>
      <Header />
      <Flex
        direction={"column"}
        alignItems={"center"}
        justify={"center"}
        h={{
          base: `calc(100vh - 112px)`,
          sm: `calc(100vh - 112px)`,
          md: `calc(100vh - 115.3px)`,
          lg: `calc(100vh - 72px)`,
        }}
      >
        <Flex direction={"column"} alignItems={"center"} h={"70%"}>
          <Flex
            direction={"column"}
            justify={"space-evenly"}
            h={"30%"}
            alignItems={"center"}
          >
            <Heading
              size={{ base: "xl", sm: "2xl", md: "2xl", lg: "3xl" }}
              textAlign={{ base: "center" }}
            >
              Login to Your Account
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
              Login using social networks
            </Text>
            {/* Correct Button Styling #Roundness */}
            <Stack direction={"row"} spacing={{ md: 4, lg: 6 }}>
              <IconButton
                aria-label="facebook"
                bgColor={"#48546E"}
                color={"#fff"}
                // fontSize={50}
                // fontSize={{ sm: 24, lg: 28, xl: 28 }}
                borderRadius={60}
                // size={"lg"}
                size={{ base: "lg", sm: "lg", md: "lg", lg: "lg" }}
                icon={<FaFacebookF size={18} />}
              />
              <IconButton
                aria-label="google plus"
                fontSize={{ sm: 24, lg: 28, xl: 28 }}
                borderRadius={{ sm: 22, md: 24, lg: 24 }}
                size={{ base: "sm", sm: "sm", lg: "lg", xl: "lg" }}
                bgColor={"#E64B2F"}
                color={"#fff"}
                icon={<FaGooglePlusG />}
              />
              <IconButton
                aria-label="linked in"
                fontSize={{ sm: 24, lg: 28, xl: 28 }}
                borderRadius={60}
                // borderRadius={{ sm: 22, md: 24, lg: 28, xl: 32 }}
                size={{ base: "sm", sm: "sm", md: "sm", lg: "lg", xl: "lg" }}
                bgColor={"#48546E"}
                color={"#fff"}
                icon={<FaLinkedinIn size={18} />}
              />
            </Stack>
          </Flex>
          <Flex
            direction={"column"}
            w={{ base: "100%", sm: "100%", lg: "70%" }}
          >
            <Box position="relative" py="6">
              <Divider />
              <AbsoluteCenter bg="white" px="4">
                OR
              </AbsoluteCenter>
            </Box>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values: SubmitValues) => {
                console.log(`Submit Form`, values);
              }}
              validate={(values) => {
                let errors: any = {};
                if (!values.email) {
                  errors.email = `Required`;
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = `Invalid Email`;
                }

                if (!values.password) {
                  errors.password = `Required`;
                }
                return errors;
              }}
            >
              {({ isSubmitting }) => (
                <Flex
                  as={Form}
                  direction={"column"}
                  justify={"center"}
                  alignItems={"center"}
                >
                  <Field
                    placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                  >
                    {({
                      field,
                      form: { touched, errors },
                    }: {
                      field: { name: string; value: string };
                      form: any;
                    }) => (
                      <FormControl isInvalid={errors.email && touched.email}>
                        <Input
                          {...field}
                          placeholder="Email"
                          bgColor={"#EEF4F2"}
                          borderRadius={18}
                          py={6}
                          border={"none"}
                          _placeholder={{ fontWeight: "bold" }}
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password">
                    {({
                      field,
                      form: { errors, touched },
                    }: {
                      field: { name: string; value: string };
                      form: any;
                    }) => (
                      <FormControl
                        my="4"
                        isInvalid={errors.password && touched.password}
                      >
                        <InputGroup>
                          <Input
                            bgColor={"#EEF4F2"}
                            borderRadius={18}
                            border={"none"}
                            {...field}
                            placeholder="Password"
                            py={6}
                            _placeholder={{ fontWeight: "bold" }}
                            type={passwordVisibility ? "text" : "password"}
                          />
                          <InputRightElement
                            h={"100%"}
                            w={"3rem"}
                            onClick={() =>
                              setPasswordVisibility(!passwordVisibility)
                            }
                          >
                            {passwordVisibility ? (
                              <IconButton
                                aria-label="Password Visibility"
                                borderRadius={14}
                                bgColor={"transparent"}
                                icon={<IoEyeOutline />}
                              />
                            ) : (
                              <IconButton
                                borderRadius={14}
                                bgColor={"transparent"}
                                aria-label="Password Visibility"
                                icon={<BsEyeSlash />}
                              />
                            )}
                          </InputRightElement>
                        </InputGroup>
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    type="submit"
                    bgColor={"#29B59A"}
                    color={"#fff"}
                    width={{ base: "80%", md: "60%", lg: "60%" }}
                    py={7}
                    mt={4}
                    borderRadius={28}
                    isDisabled={isSubmitting}
                  >
                    Sign In
                  </Button>
                </Flex>
              )}
            </Formik>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Login;

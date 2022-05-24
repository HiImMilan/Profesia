package com.example.profesia.Security;

import java.util.Date;

import com.example.profesia.User.User;
import com.example.profesia.User.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
public class ResetCodeController {

    @Autowired
    private ResetCodeRepository resetCodeRepository;

    @Autowired
    private UserRepository userRepository;
    final String base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    public String generateResetCode() {

        // generate random base64 string
        String resetCode = "";

        for (int i = 0; i < 255; i++) {
            resetCode += base64.charAt((int) (Math.random() * base64.length()));
        }
        return resetCode;
    }

    @RequestMapping("/reset-password")
    public String resetPassword(@RequestParam String email) {

        // if user exists with email
        User user = userRepository.findByEmail(email);
        if (user != null) {
            // generate reset code
            ResetCode resetCode = new ResetCode();
            String code = generateResetCode();
            resetCode.setUser(user);
            resetCode.setCode(code);
            resetCode.setExpiryDate(new Date(new java.util.Date().getTime() + (1000 * 60 * 60)));
            resetCodeRepository.save(resetCode);
            return "Reset code sent to your email";
        }

        return "Failed to send reset code";
    }

    @RequestMapping("/reset-password/verify")
    public String verifyResetCode(@RequestParam String code, @RequestParam String password) {

        // if reset code exists
        ResetCode resetCode = resetCodeRepository.findByCode(code);
        System.out.println(code);
        if (resetCode != null) {
            // if reset code is not expired
            if (resetCode.getExpiryDate().after(new Date())) {
                // update user password
                User user = resetCode.getUser();
                user.setPassword(password);
                userRepository.save(user);

                // remove reset code
                resetCodeRepository.delete(resetCode);
                return "Reset code verified";
            }
        }

        return "Reset code expired or invalid";
    }
}

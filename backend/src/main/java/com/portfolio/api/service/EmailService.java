package com.portfolio.api.service;

import com.portfolio.api.model.ContactMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class EmailService {

    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    @Autowired
    private JavaMailSender mailSender;

    @Value("${portfolio.contact.email}")
    private String contactEmail;

    public void sendContactNotification(ContactMessage message) {
        try {
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            
            // Set email details
            mailMessage.setFrom("kalanam890@gmail.com");
            mailMessage.setTo(contactEmail);
            mailMessage.setSubject("New Contact Form Submission: " + 
                (message.getSubject() != null && !message.getSubject().isEmpty() 
                    ? message.getSubject() 
                    : "No Subject"));
            
            // Build email body
            StringBuilder body = new StringBuilder();
            body.append("You have received a new message from your portfolio contact form.\n\n");
            body.append("==========================================\n\n");
            body.append("From: ").append(message.getName()).append("\n");
            body.append("Email: ").append(message.getEmail()).append("\n");
            
            if (message.getSubject() != null && !message.getSubject().isEmpty()) {
                body.append("Subject: ").append(message.getSubject()).append("\n");
            }
            
            body.append("\nMessage:\n");
            body.append("------------------------------------------\n");
            body.append(message.getMessage()).append("\n");
            body.append("------------------------------------------\n\n");
            body.append("Submitted at: ").append(message.getCreatedAt()).append("\n");
            body.append("\n==========================================\n\n");
            body.append("Reply directly to: ").append(message.getEmail()).append("\n");
            
            mailMessage.setText(body.toString());
            
            // Send the email
            mailSender.send(mailMessage);
            
            logger.info("Contact notification email sent successfully to {}", contactEmail);
            
        } catch (Exception e) {
            logger.error("Failed to send contact notification email", e);
            // Don't throw exception - we don't want to fail the contact form submission
            // if email fails
        }
    }
}

package com.big_case_club.depersonalization.model;

import jakarta.persistence.*;
import lombok.*;


import java.time.LocalDate;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
public class PersonalizeData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    private LocalDate dateOfBirth;

    private String placeOfBirth;

    private String gender;

    private String inn;

    private String snils;

    private String contactInfo;

    private String address;

    private String documentType;

    private String documentNumber;
}
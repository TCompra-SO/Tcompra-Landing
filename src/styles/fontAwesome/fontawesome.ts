import { library } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import {
  faUser as fasFaUser,
  faArrowRight as fasFaArrowRight,
  faCheck as fasFaCheck,
  faDolly as fasFaDolly,
  faHandHolding as fasFaHandHolding,
  faShoppingBasket as fasFaShoppingBasket,
  faUserTie as fasFaUserTie,
  faEnvelope as fasFaEnvelope,
  faPhone as fasFaPhone,
  faCircleCheck as fasFaCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export const faUser: IconDefinition = fasFaUser;
export const faArrowRight: IconDefinition = fasFaArrowRight;
export const faCheck: IconDefinition = fasFaCheck;
export const faDolly: IconDefinition = fasFaDolly;
export const faHandHolding: IconDefinition = fasFaHandHolding;
export const faShoppingBasket: IconDefinition = fasFaShoppingBasket;
export const faUserTie: IconDefinition = fasFaUserTie;
export const faEnvelope: IconDefinition = fasFaEnvelope;
export const faPhone: IconDefinition = fasFaPhone;
export const faCircleChek: IconDefinition = fasFaCircleCheck;

library.add(
  fasFaUser,
  fasFaArrowRight,
  fasFaCheck,
  fasFaDolly,
  fasFaHandHolding,
  fasFaShoppingBasket,
  fasFaUserTie,
  fasFaEnvelope,
  fasFaPhone,
  fasFaCircleCheck
);
